# deekor

# <!-----------------------------Plan---------------------------->

Концепция сайта, верхняя часть отображает результаты команд в консоли.
Например: (основные команды)
config - это набор элементов для изменения блока консоли. Цветовая схема, шрифт и т.д.
info - изначально открытая вкладка, с описанием работы с командной строкой
ls - отобразить в верхнем блоке иерархию папок и файлов в текущем каталоге
open filename.file - открыть файл/зайти в папку

Можно сделать структуру по типу папочной системы, где будут текстовые документы и программы.
Текстовые документы, это информация обо мне (может лежать в папке docs)
так же могут быть папки music, games, pictures

!! Можно сделать на консоли сбоку типа закладочки, на которую если нажать, она уедет вниз,
а upDisplay перересуется на весь экран (подводный камень. Надо убирать эту закладку, когда происходит
игра например. Так как всё перерисуется заново)

Отображение в верхнем блоке может быть разным. Можно сделать разное отображение флагом
например можно написать ls /music -3d
и тогда содержимое отобразится в 3D стиле
или можно отобразить ls /pictures -mono тогда в текст-блочном формате (возможно текст будет печататься в процессе!)


Сделать дефолтную команду-сцену для отображения, когда команда не найдена.
# <!!-------------------------Features------------------------->

## Что? DownContainer - должен быть класс для родительского элемента. Дочерний элемент Canvas, чтобы можно было накидывать на него события

### В классе DownContainer базовая конструкция, как в BaseHtmlElement

### 2. сделать первый приветственный экран с инструкциями

### 3. реализовать команду info и settings, на их основе выделить родительский класс для комманд

### 4. Реализовать базовый класс для Команды. Пробежать по классам в ThreeJsModels, отрефакторить и создать базовые классы, где они нужны
Сделать ConsoleStringService, в который передавать блок со строками и дефолтную строку, а внутри сервиса уже
генерировать
все что нужно.

Удаление верхней строки будет работать неправильно, если строка будет шире.(возможно, надо строку расширять на ширину
строк.
То есть делать строку кратной высоте строки. ширина = 2 строки или ширина = 3 строки. И высчитывать сколько удалять
верхних элементов)

# <!---------------------Improvement------------------------>

### Отрефакторить ThreeJS классы. Где нужно сделать базовые. Привести все методы и поля классов к одному виду.

### Нужно прописывать имена для всех объектов Three.js. Это будет удобно потом, когда надо будет искать дочерние объекты по имени

### OtherCube работает неправильно. Надо для него сделать базовый класс со своими параметрами


# <!--------------------------Bug/Fix--------------------------->
## Сделат адаптивность. Чтобы при изменении размеров окна, изменялись все блоки под размер
### Решить проблему с клонированием можно вручную создав ConsoleString.
