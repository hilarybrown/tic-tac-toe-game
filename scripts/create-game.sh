API="${API_ORIGIN:-http://localhost:7165"
URL_PATH="/post"
# API="${API_ORIGIN:-https://hilarybrown.github.io/tic-tac-toe-game/}"
# URL_PATH="/create-game"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "id": "'"${ID}"'",
    }
  }'

echo
