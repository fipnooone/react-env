```
# .env
REACT_APP_NAME=VALUE
```

```js
import { env } from ".../Env/Env";

const variable = env("NAME"); // '' - если не найдено
```
