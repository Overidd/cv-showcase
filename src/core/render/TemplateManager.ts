import type {
  TemplateDefinition
} from '../definition';

import type {
  TemplateInjector
} from '../interface';

export class TemplateManager implements TemplateInjector {

  private readonly templates = new Map<
    string,
    TemplateDefinition
  >();

  public add(template: TemplateDefinition): void {
    if (this.templates.has(template.id)) {
      throw new Error(
        `Template ${template.id} is already registered`
      )
    }
  }

  public addMany(templates: TemplateDefinition[]): void {
    templates.forEach(template => this.add(template));
  }

  public get(id: string): TemplateDefinition | null {
    const template = this.templates.get(id);

    return template ? template : null;
  }

  public has(id: string): boolean {
    return this.templates.has(id);
  }

  public delete(id: string): boolean {
    return this.templates.delete(id);
  }

  public all(): TemplateDefinition[] {
    return Array.from(this.templates.values());
  }

  public clear(): void {
    this.templates.clear();
  }

  public ids(): string[] {
    return Array.from(this.templates.keys());
  }

  public count(): number {
    return this.templates.size
  }
}