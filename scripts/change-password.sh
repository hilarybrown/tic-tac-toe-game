# API="${API_ORIGIN:-http://localhost:7165}"
# URL_PATH="/patch?id=${ID}"
API="${API_ORIGIN:-https://hilarybrown.github.io/tic-tac-toe-game}"
URL_PATH="/change-password/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'

echo
