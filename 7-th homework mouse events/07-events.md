## TASK-01

Зверстати та оживити бургер меню. Тобто зробити примітивне меню, показувати меню по натисканню на іконку бургеру, та ховати при натисканні на хрестик.

## TASK-02

Змінити курсор, тобто тегу html вимкнути властивість курсору(cursor: none), та оживити елемент з класом(root-cursor), зробити так щоб він пересувався по сторінці як звичайний курсор миші.

```html
<div class="root-cursor"></div>
```

```css
.root-cursor {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	border: 2px solid;
	position: absolute;
	transition: 0.3s;
}
```

## TASK-03

Відслідковувати клавіатурний браузерний івент таким чином, щоб при натисканні кнопки на клавіатурі,
у відповідного елементу зʼявлявся клас `hit` для того щоб підсвітити натискання.
Назви всіх натиснутих клавіш записувати у заголовок з класом 'title'.

#### Розмітка HTML:

```html
<h1 class="title"></h1>
<div class="keyboard">
	<ul class="row row-0">
		<li class="pinky" data-value="esc">ESC</li>
		<li class="pinky" data-value="back">BACK</li>
	</ul>
	<ul class="row row-1">
		<li class="pinky" data-value="tab">TAB</li>
		<li class="pinky" data-value="Q">Q</li>
		<li class="ring" data-value="W">W</li>
		<li class="middle" data-value="E">E</li>
		<li class="pointer1st" data-value="R">R</li>
		<li class="pointer2nd" data-value="T">T</li>
		<li class="pointer2nd" data-value="Y">Y</li>
		<li class="pointer1st" data-value="U">U</li>
		<li class="middle" data-value="I">I</li>
		<li class="ring" data-value="O">O</li>
		<li class="pinky" data-value="P">P</li>
		<li class="pinky">[</li>
		<li class="pinky">]</li>
		<li class="pinky">\</li>
	</ul>
	<ul class="row row-2">
		<li class="pinky" data-value="caps">CAPS</li>
		<li class="pinky" data-value="A">A</li>
		<li class="ring" data-value="S">S</li>
		<li class="middle" data-value="D">D</li>
		<li class="pointer1st" data-value="F">F</li>
		<li class="pointer2nd" data-value="G">G</li>
		<li class="pointer2nd" data-value="H">H</li>
		<li class="pointer1st" data-value="J">J</li>
		<li class="middle" data-value="K">K</li>
		<li class="ring" data-value="L">L</li>
		<li class="pinky">:</li>
		<li class="pinky">''</li>
		<li class="pinky" data-value="enter">ENTER</li>
	</ul>
	<ul class="row row-3">
		<li class="pinky" data-value="left-shift">SHIFT</li>
		<li class="pinky" data-value="Z">Z</li>
		<li class="ring" data-value="X">X</li>
		<li class="middle" data-value="C">C</li>
		<li class="pointer1st" data-value="V">V</li>
		<li class="pointer2nd" data-value="B">B</li>
		<li class="pointer2nd" data-value="N">N</li>
		<li class="pointer1st" data-value="M">M</li>
		<li class="middle">,</li>
		<li class="ring">.</li>
		<li class="pinky">;</li>
		<li class="pinky" data-value="right-shift">SHIFT</li>
	</ul>
</div>
```

```css


```
