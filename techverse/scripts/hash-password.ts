/** Génère la valeur de ADMIN_PASSWORD_HASH : npm run admin:hash -- "mot de passe long" */
import { hashPassword } from '../src/lib/auth/password'

const pwd = process.argv[2]
if (!pwd) {
  console.error('Usage : npm run admin:hash -- "votre-mot-de-passe (12 caractères minimum)"')
  process.exit(1)
}
hashPassword(pwd)
  .then((h) => console.log(h))
  .catch((e) => {
    console.error(e.message)
    process.exit(1)
  })
