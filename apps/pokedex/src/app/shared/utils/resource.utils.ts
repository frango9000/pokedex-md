export function getResourceId(url: string): number {
  return Number(url?.split('/').filter(Boolean).pop() ?? 0);
}
