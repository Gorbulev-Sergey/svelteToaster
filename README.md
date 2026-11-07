## Svelte TOASTS

Это пакет для использования всплывающих уведомлений в твоём sveltekit приложении.
Для стилизации используется **bootstrap 6**.

Для использования пакета нужно в файле главного макета добавить:

`<Toaster />`

Расположение всплывающих уведомлений на экране можно настроить с помощью параметра `position` компонента Toaster вариантами
`'topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'`:

`<Toaster position='topRight' />`

##

и далее в коде используйте метод `toast()` для отправки уведомления:

`toast({title:'Привет', content:'Как дела?'})`

Параметры `title` и `content` могут принимать не только простой текст, но и любые html-теги:

`toast({title:'<i>Привет</i>', content:'<b class='text-uppercase'>Как дела?</b>'})`

##

Уведомление можно стилизовать классами bootstrap через параметр `_class`:

`toast({title:'Привет', content:'<b class='text-uppercase'>Как дела?</b>', _class:'bg-info'})`

либо дополнительными параметрами:

- `bg` и `fg` `('body', 'primary', 'accent', 'success', 'danger', 'warning', 'info', 'inverse', 'secondary', 'black', 'white';)`
- `opacity` `('10', '20', '30', '40', '50', '60', '70', '80', '90')`
- `shadow` `('shadow-none', 'shadow-sm', 'shadow', 'shadow-lg')`

Например:

`toast({title:'<i>Привет</i>', content:'<b class='text-uppercase'>Как дела?</b>', bg:'info', opacity:'shadow-sm'})`
