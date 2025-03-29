# @lifeos/config

Shared configuration package for the LifeOS monorepo. This package contains:

- Environment configuration
- Constants and shared settings
- Feature flags
- Configuration types and schemas

## Usage

```typescript
import { config } from '@lifeos/config';

// Access environment variables
const { MONGODB_URI } = config.env;

// Access feature flags
const { isFeatureEnabled } = config.features;
``` 