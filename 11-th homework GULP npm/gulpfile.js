//gulp - це обєкт, ми його імпортнули з бібліотеки, яку вставновили щойно
import gulp from 'gulp';
import bs from 'browser-sync';
import clean from 'gulp-clean';

//.task() - це метод обєкту гальп. По факту цей метод створює нове завдання для обєкту гальп (детальніше далі)

//.src()   , .pipe() ,    .dest()  - це все методи обєкту gulp у кожного своя задача
//створення таски нижче можна прочитати як звернення до обєкту гальп за допомогою методу таск
//в таск ми передаємо назву функції (в цьому випадку htmlTask) та що буде виконувати
// (я задаю за допомогою методу .src() що/звідки я беру і куди перекладаю
//за допомогою методу .pipe() і вказую куди за допомогою методу .dest())

const htmlTask = () => gulp.src('./src/*.html').pipe(gulp.dest('build'));

//по аналогії вище створюємо таску для js, scss та іншого потрібного

const jsTask = () => gulp.src('./src/js/**/*').pipe(gulp.dest('build/js'));

// gulp.task('jsTask', () => {
//   return gulp.src('./src/js/**/*').pipe(gulp.dest('build'));
// });

//для коректної роботи компілятора scss необхідно інсталювати додакову бібліотеку gulp sass
// npm i -D gulp -sass

const scssTask = () =>
  gulp
    .src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));

//для запуска gulp у вигляді лайф сервера необхідно установити 2 додаткових модулі 'browser-sync' та 'gulp-clean'
const browserSync = bs.create();
const serve = (callback) => {
  browserSync.init({
    server: {
      baseDir: './build',
    },
    files: [
      `build/*.html`,
      `build/css/*.css`,
      `build/js/*.js`,
      {
        match: `build/img/**/*`,
        fn() {
          this.reload();
        },
      },
    ],
  });

  callback();
};
const cleanTask = () => gulp.scr('build', { allowEmpty: true }).pipe(clean());

//тепер для того, щоб не викликати всі створені функції для оно влекння білда необхідно поєднати всі створені функції у одну
gulp.task('default', gulp.series(cleanTask, htmlTask, jsTask, scssTask, serve));

// Додати метод для переносу шрифтів до папки build
