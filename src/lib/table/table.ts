import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';

export interface GenericTableColumn {
  key: string;
  header: string;
  sortable?: boolean;
  filterable?: boolean;
  align?: 'left' | 'center' | 'right';
  width?: string;
}

export type GenericTableRow = Record<string, string | number | boolean | null>;

@Component({
  selector: 'generic-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class GenericTable {
  readonly columns = input<GenericTableColumn[]>([]);
  readonly rows = input<GenericTableRow[]>([]);
  readonly searchable = input(true);
  readonly searchPlaceholder = input('Buscar...');
  readonly pageSize = input(8);
  readonly emptyMessage = input('Sin resultados');

  readonly rowClick = output<GenericTableRow>();
  readonly sortChange = output<{ key: string; direction: 'asc' | 'desc' }>();

  readonly query = signal('');
  readonly sortKey = signal('');
  readonly sortDir = signal<'asc' | 'desc'>('asc');
  readonly page = signal(1);
  readonly filters = signal<Record<string, string>>({});

  readonly filterableColumns = computed(() => this.columns().filter((col) => col.filterable));

  readonly filterOptions = computed(() => {
    const map: Record<string, string[]> = {};
    for (const col of this.filterableColumns()) {
      const values = new Set(this.rows().map((row) => String(row[col.key] ?? '')));
      map[col.key] = Array.from(values).sort();
    }
    return map;
  });

  readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    const active = this.filters();
    return this.rows().filter((row) => {
      for (const [key, value] of Object.entries(active)) {
        if (value && String(row[key] ?? '') !== value) return false;
      }
      if (!q) return true;
      return this.columns().some((col) => String(row[col.key] ?? '').toLowerCase().includes(q));
    });
  });

  readonly sorted = computed(() => {
    const key = this.sortKey();
    const dir = this.sortDir() === 'asc' ? 1 : -1;
    const rows = [...this.filtered()];
    if (!key) return rows;
    return rows.sort((a, b) => {
      const av = a[key];
      const bv = b[key];
      if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * dir;
      return String(av ?? '').localeCompare(String(bv ?? ''), 'es') * dir;
    });
  });

  readonly pageCount = computed(() => Math.max(1, Math.ceil(this.sorted().length / this.pageSize())));

  readonly pageRows = computed(() => {
    const size = this.pageSize();
    const start = (this.page() - 1) * size;
    return this.sorted().slice(start, start + size);
  });

  setQuery(value: string): void {
    this.query.set(value);
    this.page.set(1);
  }

  setFilter(key: string, value: string): void {
    this.filters.update((current) => ({ ...current, [key]: value }));
    this.page.set(1);
  }

  sort(col: GenericTableColumn): void {
    if (!col.sortable) return;
    if (this.sortKey() === col.key) {
      this.sortDir.set(this.sortDir() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortKey.set(col.key);
      this.sortDir.set('asc');
    }
    this.sortChange.emit({ key: this.sortKey(), direction: this.sortDir() });
  }

  go(page: number): void {
    const next = Math.min(Math.max(page, 1), this.pageCount());
    this.page.set(next);
  }

  filterValue(key: string): string {
    return this.filters()[key] || '';
  }

  cell(row: GenericTableRow, key: string): string {
    const value = row[key];
    return value == null ? '' : String(value);
  }
}
