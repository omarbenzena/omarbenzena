export * from './contracts';

/**
 * Framework-neutral API boundary. Web, PWA and future native clients should
 * call domain services through this boundary rather than duplicating rules.
 */
export interface DomainService<TInput, TOutput> {
  execute(input: TInput): Promise<TOutput>;
}
