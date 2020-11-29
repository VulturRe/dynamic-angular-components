export interface DynamicComponentData {
  label?: string;
  value?: string;
}

export interface DynamicComponentDesc {
  label?: string;
  type: DynamicComponentType;
  value?: string;
}

export type DynamicComponentType = 'INPUT' | 'TEXT';
