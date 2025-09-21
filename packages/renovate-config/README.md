![Renovate config](https://github.com/user-attachments/assets/84c79f1c-d70a-4a8d-b169-49ed1eebe370)

---

> [!NOTE]
> This is a quick guide on how to set up and use Renovate with the recommended configuration.

### 🛠 How to use?

Create a file named `renovate.json` wherever you want and paste the content below into it.

```json
{
 "$schema": "https://docs.renovatebot.com/renovate-schema.json",
 "extends": ["github>r4lrgx/kitter//packages/renovate-config/src/index.json"]
}
```

## 📋 License

This repository is distributed under the terms of the **[MIT License](LICENSE.md)**.
