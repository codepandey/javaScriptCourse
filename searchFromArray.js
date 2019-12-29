var geek = ["Rahul", "Ram", 56, "Jay"];
			geek.forEach(function (value, index) {
				console.log(value + " " + index);
            });
            

            var add = function(x) {
                return function(y) {
                    return x + y;
                }
            }
            console.log(add(2)(3));





            var str = "Hello Geekyshows";
			console.log((str.replace("Geekyshows", "World")));
			
            var str = "Hi guys Lets Learn JavaScript";
			var arr = str.split(" ");
			console.log(arr);
			





