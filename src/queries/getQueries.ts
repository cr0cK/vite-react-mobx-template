type Query = 'getUsers' | 'getRoles' | 'mutateAuthedUser'

/**
 * Returns the provided query name after ensuring it is one of the allowed values.
 */
export function getQuery(queryName: Query) {
  return queryName
}
