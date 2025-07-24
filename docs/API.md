# 📖 API Документация

## 📌 Аутентификация

🔐 Пока не используется (в будущем можно добавить JWT или Telegram ID).

---

## 📂 Users

### `GET /users/:id`
Получить пользователя по ID (Telegram ID).

#### Ответ:
```json
{
  "id": "123456",
  "username": "john_doe",
  "role": "GUEST",
  "balance": 0
}
```

---

### `POST /users`
Создать нового пользователя.

#### Тело запроса:
```json
{
  "id": "123456",
  "username": "john_doe"
}
```

---

### `PATCH /users/:id`
Обновить пользователя.

#### Пример:
```json
{
  "role": "SUBSCRIBER",
  "balance": 100
}
```

---

### `GET /users/:id/subscriptions`
Получить подписки пользователя.

---

### `GET /users/:id/transactions`
Получить транзакции пользователя.

---

## 📂 Plans

### `GET /plans`
Список всех тарифов.

### `GET /plans/:id`
Получить конкретный тариф.

### `POST /plans`
Создать тариф.

#### Пример:
```json
{
  "name": "1 месяц",
  "price": 299,
  "durationDays": 30
}
```

### `PATCH /plans/:id` — обновить тариф  
### `DELETE /plans/:id` — удалить тариф

---

## 📂 Subscriptions

### `GET /subscriptions/:id`
Получить подписку с деталями.

### `POST /subscriptions`
Создать подписку:

```json
{
  "userId": "123456",
  "planId": 1,
  "expiresAt": "2025-08-01T00:00:00.000Z"
}
```

### `PATCH /subscriptions/:id`
Обновить подписку.

---

## 📂 VPN Keys

### `GET /keys/:id`
Получить ключ.

### `POST /keys`
Создать ключ:

```json
{
  "subscriptionId": 1,
  "serverId": 2,
  "key": "ss://example",
  "serverName": "Нидерланды 1",
  "trafficLimit": 5000,
  "expiresAt": "2025-08-01T00:00:00.000Z"
}
```

### `PATCH /keys/:id`
Обновить ключ.

---

## 📂 Servers

### `GET /servers`
Список всех серверов.

### `GET /servers/:id`
Получить сервер по ID.

### `POST /servers`
Создать сервер:

```json
{
  "name": "Нидерланды 1",
  "ip": "185.12.123.5",
  "port": 443,
  "password": "vpn123",
  "country": "Netherlands"
}
```

### `PATCH /servers/:id`
Обновить сервер.

---

## 📂 Transactions

### `GET /transactions/:id`
Получить транзакцию.

### `POST /transactions`
Создать транзакцию:

```json
{
  "userId": "123456",
  "subcriptionId": 2,
  "amount": 299,
  "type": "PAYMENT",
  "status": "SUCCESS",
  "description": "Оплата тарифа 1 месяц"
}
```

### `GET /transactions/user/:userId`
Все транзакции пользователя.

---

## 📂 PromoCodes

### `GET /promos`
Список активных промокодов.

### `POST /promos`
Создать промо:

```json
{
  "code": "FREETRIAL",
  "value": 100,
  "maxUses": 10,
  "expiresAt": "2025-12-31T00:00:00.000Z"
}
```

### `POST /promos/redeem`
Активировать промокод:

```json
{
  "userId": "123456",
  "code": "FREETRIAL"
}
```

#### Ответ:
```json
{ "success": true }
```

---