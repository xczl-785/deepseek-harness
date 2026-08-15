/** Remove test fixtures without following Windows junctions into the repository. */

import { lstatSync, readdirSync, rmSync, unlinkSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Recursively unlink every symbolic link under a fixture path.
 * @param path - Fixture tree whose links must not be followed.
 */
export function unlinkFixtureLinks(path: string): void {
  const visit = (entry: string): void => {
    let stat: ReturnType<typeof lstatSync>
    try {
      stat = lstatSync(entry)
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') return
      throw error
    }
    if (stat.isSymbolicLink() || !stat.isDirectory()) {
      if (stat.isSymbolicLink()) unlinkSync(entry)
      return
    }
    for (const child of readdirSync(entry)) visit(join(entry, child))
  }
  visit(path)
}

/**
 * Remove a fixture after unlinking junctions and retry transient Windows handle failures.
 * @param path - Fixture tree to remove.
 */
export function removeFixtureSafely(path: string): void {
  unlinkFixtureLinks(path)
  rmSync(path, { recursive: true, force: true, maxRetries: 50, retryDelay: 200 })
}
