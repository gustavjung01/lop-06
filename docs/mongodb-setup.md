# MongoDB Setup & Credential Management

## Credential Source (External to Repo)

MongoDB credentials are stored in **external file** (not in repo):
```
F:\1_A_Disk_D\khuong-binh\TK\Database_mongo.txt
```

**Why external?** Prevents accidental commits of secrets.

## How to Use MongoDB Credentials

### During Development

1. **Copy credentials locally** (when needed):
   ```powershell
   $cred = Get-Content "F:\1_A_Disk_D\khuong-binh\TK\Database_mongo.txt"
   ```

2. **Set environment variable** (in your local terminal):
   ```powershell
   $env:MONGODB_URI = $cred
   # or
   $env:MONGO_CONNECTION_STRING = $cred
   ```

3. **In your app code**:
   ```javascript
   const mongoUri = process.env.MONGODB_URI || process.env.MONGO_CONNECTION_STRING;
   if (!mongoUri) {
     throw new Error('MongoDB URI not configured. Set MONGODB_URI env var.');
   }
   // Connect to MongoDB using mongoUri
   ```

### During Deployment

- Add `MONGODB_URI` as a secret in deployment platform (Vercel, GitHub Actions, etc.)
- Never embed credentials in code or `.env` files in repo

## Security Rules

✅ **DO:**
- Read credentials files locally before running app
- Use environment variables (process.env)
- Store pointer path in `docs/keys.md` only
- Add credentials to `.gitignore` pattern (already done)
- Use different credentials for dev/staging/prod

❌ **DON'T:**
- Print credentials to console/logs
- Copy credentials into code files
- Commit `.env` or credential files
- Commit `docs/keys.md` with actual values
- Share credentials in Slack/email/Discord

## Integration Plan

MongoDB will be integrated with:
- **Clerk** — user authentication
- **License system** — app licensing
- **Account management** — user profiles/settings

See `chatbot_engine_plan_hoc_tap_thong_minh.md` for full architecture.

## Status

- ✓ MongoDB credentials stored externally
- ✓ Pointer documented in `docs/keys.md`
- ✓ `.gitignore` protects sensitive files
- ⏳ Integration implementation (future phase)
