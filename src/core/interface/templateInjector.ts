import type {
  TemplateDefinition
} from '../definition';

export abstract class TemplateInjector {
  abstract add(template: TemplateDefinition): void;

  abstract addMany(templates: TemplateDefinition[]): void;

  abstract get(id: string): TemplateDefinition | null;

  abstract has(id: string): boolean;

  abstract delete(id: string): boolean;

  abstract all(): TemplateDefinition[];

  abstract clear(): void;

  abstract ids(): string[];

  abstract count(): number
}