# Movie List App

Это проект на Next.js, который отображает список фильмов, используя данные с API The Movie Database (TMDB). Приложение позволяет пользователям открывать, искать и просматривать фильмы по жанрам, а также предоставляет подробную информацию о каждом фильме.

## Функциональные возможности

- Обзор фильмов: Сейчас в прокате, Лучшие, Популярные и Ожидаемые.
- Поиск фильмов по названию или частичному названию.
- Просмотр фильмов по жанрам.
- Пагинация для навигации по нескольким страницам с результатами фильмов.
- Подробная информация о фильме с постером, названием и датой выпуска.
- Переключатель тем: тёмная/светлая тема.

## Технологический стек

- **Next.js** 14
- **TypeScript**
- **Tailwind CSS** для стилизации
- **TMDB API** для получения данных о фильмах
- **Redux** для управления состоянием
- **React-компоненты**: Card, Loading, Footer и другие.

## Начало работы

### Требования

- Node.js (версии 16 или выше)
- npm (версии 7 или выше)

### Установка

1. **Клонируйте репозиторий**:

   ```bash
   git clone https://github.com/Lis1van/exam_nexr_tmdb.git
   ```

2. **Перейдите в директорию проекта**:

   ```bash
   cd exam_nexr_tmdb
   ```

3. **Установите зависимости**:

   ```bash
   npm install
   ```

4. **Создайте файл `.env.local`** в корневой папке проекта со следующим содержимым:

   ```plaintext
   NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
   ```

   Замените `your_tmdb_api_key_here` на ваш актуальный API-ключ с [The Movie Database (TMDB)](https://www.themoviedb.org/).

5. **Запустите сервер разработки**:

   ```bash
   npm run dev
   ```

6. **Откройте приложение**:

   Перейдите по адресу [http://localhost:3000](http://localhost:3000) в вашем браузере, чтобы увидеть приложение.

## Получение API-ключа TMDB

1. Перейдите на [сайт The Movie Database (TMDB)](https://www.themoviedb.org/).
2. Создайте аккаунт или войдите, если у вас уже есть учетная запись.
3. Перейдите в настройки аккаунта и выберите раздел API.
4. Создайте новый API-ключ и скопируйте его.
5. Вставьте API-ключ в файл `.env.local`, как указано выше.

## Внесение изменений

Если вы хотите внести изменения в этот проект, пожалуйста, создайте форк репозитория и используйте отдельную ветку для ваших изменений. Пулл-реквесты приветствуются.

## Лицензия

Этот проект лицензирован на условиях лицензии MIT. Подробности см. в файле `LICENSE`.

## Благодарности

- Спасибо [The Movie Database (TMDB)](https://www.themoviedb.org/) за предоставление API, использованного в этом проекте.
- Вдохновение для дизайна проекта было взято с концепций на Dribbble: 'Media store idea (Movies)' и 'Raymov Website (streaming movie)'.

```

Этот файл `README.md` предоставляет полное описание проекта, шаги установки и инструкцию по настройке необходимых переменных окружения для запуска проекта.
```

Вот пример файла `README.md`, который вы можете использовать для вашего проекта:



# Movie List App

This is a Next.js project that displays a list of movies using data from The Movie Database (TMDB) API. The application allows users to discover, search, and browse movies by genre, and provides detailed information about each movie.

## Features

- Discover movies: Now Playing, Top Rated, Popular, and Upcoming.
- Search for movies by name or partial name.
- Browse movies by genre.
- Pagination to navigate through multiple pages of movie results.
- Detailed movie information with poster, title, and release date.
- Dark/Light theme switcher.

## Tech Stack

- **Next.js** 14
- **TypeScript**
- **Tailwind CSS** for styling
- **TMDB API** for movie data
- **Redux** for state management
- **React Components**: Card, Loading, Footer, etc.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Lis1van/exam_nexr_tmdb.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd exam_nexr_tmdb
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Create a `.env.local` file** in the root of the project with the following content:

   ```plaintext
   NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
   ```

   Replace `your_tmdb_api_key_here` with your actual API key from [The Movie Database (TMDB)](https://www.themoviedb.org/).

5. **Run the development server**:

   ```bash
   npm run dev
   ```

6. **Open the application**:

   Visit [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Getting a TMDB API Key

1. Go to [The Movie Database (TMDB) website](https://www.themoviedb.org/).
2. Create an account or log in if you already have one.
3. Navigate to your account settings and select the API section.
4. Generate a new API key and copy it.
5. Paste the API key into the `.env.local` file as instructed above.

## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements

- Thanks to [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the API used in this project.
- The design inspirations for this project were taken from Dribbble concepts: 'Media store idea (Movies)' and 'Raymov Website (streaming movie)'.

```

This `README.md` file provides a comprehensive overview of the project, installation steps, and how to set up the necessary environment variables to get the project running.
```
