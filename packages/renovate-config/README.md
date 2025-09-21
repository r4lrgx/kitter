![Renovate config](https://github.com/user-attachments/assets/63163cc0-61c7-4fb6-8292-3b82db30dfc7)

---

### 🛠 How to use?

> [!NOTE]
> This is a quick guide on how to set up and use Renovate with the recommended configuration.

1. First, create a Renovate configuration file. See the official docs for all available options: [Renovate Configuration Options](https://docs.renovatebot.com/configuration-options/).
2. For simplicity and consistency, it’s best to use **`renovate.json`** or **`.renovaterc.json`** inside your repo.

```json
// .github/renovate.json or .github/.renovaterc.json
{
 "$schema": "https://docs.renovatebot.com/renovate-schema.json",
 "extends": ["github>r4lrgx/kitter//packages/renovate-config/src/index.json"]
}
```

This setup tells Renovate to extend the shared configuration provided by this repo.

## 📋 License

This repository is distributed under the terms of the **[MIT License](LICENSE.md)**.
