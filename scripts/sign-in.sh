# API="${API_ORIGIN:-http://localhost:7165}"
# URL_PATH="/sign-in"
API="${API_ORIGIN:-https://hilarybrown.github.io/tic-tac-toe-game}"
URL_PATH="/sign-in"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
