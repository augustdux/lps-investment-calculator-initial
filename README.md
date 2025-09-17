# Калькулятор Инвестиций (Начальная версия)

Первая реализация проекта для изучения основ работы с состоянием в React.

### Стек
- React, Vite, JavaScript, CSS

### Ключевые концепции
- **Локальное состояние:** Компонент формы `InputGroup` управляет своим состоянием.
- **Передача данных "наверх":** Данные передаются родителю через callback-функцию.
- **Синхронизация через `useEffect`:** Хук отслеживает изменения и вызывает callback.

---
*Финальная версия с "поднятием состояния" находится [здесь](https://github.com/augustdux/lps-investment-calculator/tree/main).*

### Запуск
```bash
git clone https://github.com/augustdux/lps-investment-calculator-initial.git
cd lps-investment-calculator-initial
npm install
npm run dev
