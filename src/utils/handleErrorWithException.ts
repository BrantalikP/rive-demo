import { queryErrorHandler } from '~/api/query-client'
import { ApiError } from '~/types/api'

export const handleErrorWithException = ({
  error,
  errorHandler,
  errorCodes = [],
}: {
  error: unknown
  errorHandler: (error: unknown) => void
  errorCodes?: number[]
}) => {
  if (errorCodes.includes((error as ApiError)?.statusCode)) {
    errorHandler(error)
  } else {
    queryErrorHandler(error)
  }
}
