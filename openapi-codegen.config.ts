import { defineConfig } from '@openapi-codegen/cli'
import { generateReactQueryComponents, generateSchemaTypes } from '@openapi-codegen/typescript'
import * as dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  api: {
    from: {
      source: 'url',
      url: `${process.env.EXPO_PUBLIC_API_URL}/api/json`,
    },
    outputDir: 'src/api/generated',
    to: async (context) => {
      const filenamePrefix = 'api'
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      })
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      })
    },
  },
})
