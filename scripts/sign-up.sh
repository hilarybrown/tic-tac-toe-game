API="${API_ORIGIN:-localhost:7165}"
URL_PATH="/sign-up"
# API="${API_ORIGIN:-https://hilarybrown.github.io/tic-tac-toe-game}"
# URL_PATH="/sign-up"
# header is different between this document and sign-up.sh

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
