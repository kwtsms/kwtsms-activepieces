<picture>
  <source media="(prefers-color-scheme: dark)" srcset=".github/assets/readme-header-dark.png">
  <img alt="kwtSMS for Activepieces" src=".github/assets/readme-header-light.png">
</picture>

# kwtSMS piece for Activepieces

Send Arabic and English SMS from your [Activepieces](https://www.activepieces.com) flows with [kwtSMS](https://www.kwtsms.com), the Kuwait SMS gateway.

All kwtSMS integrations: [kwtsms.com/integrations](https://www.kwtsms.com/integrations/)

## Install

1. In Activepieces, open **Settings > My Pieces > Install Piece**.
2. Enter the package name `@kwtsms/piece-kwtsms` and install it.
3. Add a kwtSMS step to a flow and create the connection.

Self-hosted and cloud projects that allow custom pieces can install it. Steps follow the Activepieces guide: https://www.activepieces.com/docs/build-pieces/sharing-pieces/community

## Connection

Use your kwtSMS **API** username and password (from the API page in your account), not your website login. The connection is checked with `POST /API/balance/`.

No account yet? Sign up free at https://www.kwtsms.com.

## Actions

| Action | Endpoint | Notes |
| --- | --- | --- |
| Send SMS | `/API/send/` | Sender ID dropdown from `/API/senderid/`. Test Mode is on by default (`test=1`: queued, never delivered). Up to 200 numbers per request, larger lists are batched. |
| Get Balance | `/API/balance/` | Available and purchased credits. |
| Validate Numbers | `/API/validate/` | Returns `ok`, `er` (bad format) and `nr` (no route) lists. |
| Message Status | `/API/status/` | Queue status for a `msg-id`. Not a delivery report. |

Numbers are cleaned before sending: Arabic-Indic and Persian digits become Latin, `+`, `00`, spaces and other non-digits are removed, duplicates are dropped. Messages have emoji, hidden characters and HTML tags removed.

Turn Test Mode off when you go live. Test messages stay in your Sending Queue and hold their credits until you delete them there.

Errors show the kwtSMS code and description, for example `ERR003: Authentication error, username or password are not correct.`

Placeholder number format: `965XXXXXXXX`.

## Arabic

Arabic text is sent as Unicode; one SMS holds 70 Arabic characters (67 per part in a long message).

## Support

- API documentation: https://www.kwtsms.com/api-documentation.html
- Issues: https://github.com/kwtsms/kwtsms-activepieces/issues
- kwtSMS support: https://www.kwtsms.com

## License

MIT
