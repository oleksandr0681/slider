//Написать простенький слайдер.
//Посередине окна картинка. По бокам расположены элементы управления(кнопки, картинки) для листания изображений.
//Под картинкой расположен блок с просматриваемыми картинками, но уменьшенными.
//Нажимая на кнопку листать вперед, изображение меняется на последующее. Нажимая кнопку листать назад, изображение меняется на предыдущее.
//Кликая на картинку из блока просматриваемых картинок, меняется изображение из основного блока на нажатое.


(function() //Самовызывающаяся функция.
    {
        window.addEventListener //addEventListener - метод, назначающий обработчик события.
        ('load', function()     // 'load' - событие (загрузка окна).
                                // Функция вызывается при возникновении указанного события (загрузка окна).
            {
				var element1=document.getElementById("little1");
				// Элемент присваивается переменной element1.
				// Объект document представляет всю страницу в браузере и содержит полную модель DOM.
				// getElementById ищет элемент с идентификатором little1.
                var element2=document.getElementById("little2");
				// Элемент присваивается переменной element2.
				// Объект document представляет всю страницу в браузере и содержит полную модель DOM.
				// getElementById ищет элемент с идентификатором little2.
				var element3=document.getElementById("little3");
				var element4=document.getElementById("little4");
				var element5=document.getElementById("little5");
				var element6=document.getElementById("little6");
				var element7=document.getElementById("little7");
				var element8=document.getElementById("little8");
				var element9=document.getElementById("little9");
				var element10=document.getElementById("little10");
				var pict1=document.getElementById("picture1");
				var pict2=document.getElementById("picture2");
				var pict3=document.getElementById("picture3");
				var pict4=document.getElementById("picture4");
				var pict5=document.getElementById("picture5");
				var pict6=document.getElementById("picture6");
				var pict7=document.getElementById("picture7");
				var pict8=document.getElementById("picture8");
				var pict9=document.getElementById("picture9");
				var pict10=document.getElementById("picture10");
				var button_left=document.getElementById("left");
				var button_right=document.getElementById("right");
				
				function switch_off() // Функция выключает все картинки.
				{
					pict1.setAttribute("class", "fl mb hidden");
					pict2.setAttribute("class", "fl pa hidden");
					pict3.setAttribute("class", "fl pa hidden");
					pict4.setAttribute("class", "fl pa hidden");
					pict5.setAttribute("class", "fl pa hidden");
					pict6.setAttribute("class", "fl pa hidden");
					pict7.setAttribute("class", "fl pa hidden");
					pict8.setAttribute("class", "fl pa hidden");
					pict9.setAttribute("class", "fl pa hidden");
					pict10.setAttribute("class", "fl pa hidden");
				}
				var marker=1;
				
				// Обработка событий уменьшенных картинок.
				if(element1!=null) // Если element1 содержит значение атрибута.
				{
					element1.addEventListener //addEventListener - метод, назначающий обработчик события.
					("click", function() // "click" - событие.
						{
							switch_off();
							pict1.setAttribute("class", "fl mb visible");
							// Вызов метода setAttribute изменяет значение существующего атрибута, 
							// а если атрибут не существует — добавляет новый атрибут в элемент. 
							// Метод получает два аргумента: имя атрибута, который нужно задать или изменить
							// и значение, присваиваемое атрибуту.
							marker=1;
						}
					)
				}
				else console.log("Элемент с идентификатором little1 не нашёлся."); // Вывод отладочной информации. Если element1 содержит null.
				if(element2!=null) // Если element2 содержит значение атрибута.
				{
					element2.addEventListener //addEventListener - метод, назначающий обработчик события.
					("click", function() // "click" - событие.
						{
							switch_off();
							pict2.setAttribute("class", "fl pa visible");
							marker=2;
						}
					)
				}
				else console.log("Элемент с идентификатором little2 не нашёлся."); // Если element2 содержит null.
				if(element3!=null) // Если element3 содержит значение атрибута.
				{
					element3.addEventListener //addEventListener - метод, назначающий обработчик события.
					("click", function() // "click" - событие.
						{
							switch_off();
							pict3.setAttribute("class", "fl pa visible");
							marker=3;
						}
					)
				}
				else console.log("Элемент с идентификатором little3 не нашёлся."); // Если element3 содержит null.
				if(element4!=null) // Если element4 содержит значение атрибута.
				{
					element4.addEventListener //addEventListener - метод, назначающий обработчик события.
					("click", function() // "click" - событие.
						{
							switch_off();
							pict4.setAttribute("class", "fl pa visible");
							marker=4;
						}
					)
				}
				else console.log("Элемент с идентификатором little4 не нашёлся."); // Если element4 содержит null.
				if(element5!=null) // Если element5 содержит значение атрибута.
				{
					element5.addEventListener //addEventListener - метод, назначающий обработчик события.
					("click", function() // "click" - событие.
						{
							switch_off();
							pict5.setAttribute("class", "fl pa visible");
							marker=5;
						}
					)
				}
				else console.log("Элемент с идентификатором little5 не нашёлся."); // Если element5 содержит null.
				if(element6!=null) // Если element6 содержит значение атрибута.
				{
					element6.addEventListener //addEventListener - метод, назначающий обработчик события.
					("click", function() // "click" - событие.
						{
							switch_off();
							pict6.setAttribute("class", "fl pa visible");
							marker=6;
						}
					)
				}
				else console.log("Элемент с идентификатором little6 не нашёлся."); // Если element6 содержит null.
				if(element7!=null) // Если element7 содержит значение атрибута.
				{
					element7.addEventListener //addEventListener - метод, назначающий обработчик события.
					("click", function() // "click" - событие.
						{
							switch_off();
							pict7.setAttribute("class", "fl pa visible");
							marker=7;
						}
					)
				}
				else console.log("Элемент с идентификатором little7 не нашёлся."); // Если element7 содержит null.
				if(element8!=null) // Если element8 содержит значение атрибута.
				{
					element8.addEventListener //addEventListener - метод, назначающий обработчик события.
					("click", function() // "click" - событие.
						{
							switch_off();
							pict8.setAttribute("class", "fl pa visible");
							marker=8;
						}
					)
				}
				else console.log("Элемент с идентификатором little8 не нашёлся."); // Если element8 содержит null.
				if(element9!=null) // Если element9 содержит значение атрибута.
				{
					element9.addEventListener //addEventListener - метод, назначающий обработчик события.
					("click", function() // "click" - событие.
						{
							switch_off();
							pict9.setAttribute("class", "fl pa visible");
							marker=9;
						}
					)
				}
				else console.log("Элемент с идентификатором little9 не нашёлся."); // Если element9 содержит null.
				if(element10!=null) // Если element10 содержит значение атрибута.
				{
					element10.addEventListener //addEventListener - метод, назначающий обработчик события.
					("click", function() // "click" - событие.
						{
							switch_off();
							pict10.setAttribute("class", "fl pa visible");
							marker=10;
						}
					)
				}
				else console.log("Элемент с идентификатором little10 не нашёлся."); // Если element10 содержит null.
				
				// Обработка событий кнопки влево.
				button_left.addEventListener //addEventListener - метод, назначающий обработчик события.
				("click", function() // "click" - событие.
					{
						switch(marker)
						{
							case 1:
								break;
							case 2:
								switch_off();
								pict1.setAttribute("class", "fl mb visible");
								marker--;
								break;
							case 3:
								switch_off();
								pict2.setAttribute("class", "fl pa visible");
								marker--;
								break;
							case 4:
								switch_off();
								pict3.setAttribute("class", "fl pa visible");
								marker--;
								break;
							case 5:
								switch_off();
								pict4.setAttribute("class", "fl pa visible");
								marker--;
								break;
							case 6:
								switch_off();
								pict5.setAttribute("class", "fl pa visible");
								marker--;
								break;
							case 7:
								switch_off();
								pict6.setAttribute("class", "fl pa visible");
								marker--;
								break;
							case 8:
								switch_off();
								pict7.setAttribute("class", "fl pa visible");
								marker--;
								break;
							case 9:
								switch_off();
								pict8.setAttribute("class", "fl pa visible");
								marker--;
								break;
							case 10:
								switch_off();
								pict9.setAttribute("class", "fl pa visible");
								marker--;
								break;
							default:
								break;
						}
					}
				)
				
				// Обработка событий кнопки вправо.
				button_right.addEventListener //addEventListener - метод, назначающий обработчик события.
				("click", function() // "click" - событие.
					{
						switch(marker)
						{
							case 1:
								switch_off();
								pict2.setAttribute("class", "fl pa visible");
								marker++;
								break;
							case 2:
								switch_off();
								pict3.setAttribute("class", "fl pa visible");
								marker++;
								break;
							case 3:
								switch_off();
								pict4.setAttribute("class", "fl pa visible");
								marker++;
								break;
							case 4:
								switch_off();
								pict5.setAttribute("class", "fl pa visible");
								marker++;
								break;
							case 5:
								switch_off();
								pict6.setAttribute("class", "fl pa visible");
								marker++;
								break;
							case 6:
								switch_off();
								pict7.setAttribute("class", "fl pa visible");
								marker++;
								break;
							case 7:
								switch_off();
								pict8.setAttribute("class", "fl pa visible");
								marker++;
								break;
							case 8:
								switch_off();
								pict9.setAttribute("class", "fl pa visible");
								marker++;
								break;
							case 9:
								switch_off();
								pict10.setAttribute("class", "fl pa visible");
								marker++;
								break;
							case 10:
								break;
							default:
								break;
						}
					}
				)
            }
		)
    }
)();
