window.onload=function(){
	creator();
}
// var arr=[""];s
var spanbox=["Kaushik Mishra ,Ayush jain and 272 other, Connections follows LinkedIn  Marketing Solution"]
var imagearr=[
"https://media-exp1.licdn.com/dms/image/C560BAQHYyjZVOa4b1A/company-logo_200_200/0?e=1602115200&v=beta&t=2I3UbFjNhlfURiD1ejxqCnCWH9vCyeCCclPLDYh_7Mc"
];
var span1Array=["linkedin marketing solutions"];
var span2arr=["4,259,248 followers"];
var span3arr=["Promoted"];
// part3 ka arr
var part3array=["Leverage your linkedin Page to its full potential.Boost engagement of a post with $50 in free LinkedIn ad credits. "];
function creator(){	
	var storyContainer=document.getElementsByClassName('middle-container');
		for (var i = 0; i<10; i++) {
			var post= document.createElement("div");
				post.classList.add('post-box');

				var part1=document.createElement('div');
				part1.classList.add('post-box-1');
				var spantext=document.createElement('span');
				spantext.innerHTML=spanbox[i];
				spantext.classList.add('span-box1');
				part1.appendChild(spantext);
				post.appendChild(part1);

				//part2 
				var part2=document.createElement('div');
				part2.classList.add('post-box-2');

				var sub=document.createElement('div');
				sub.classList.add('img-sub');
				part2.appendChild(sub);

				var image=document.createElement('img');
				image.classList.add('pro-img');
				image.setAttribute('alt','Images');
				image.setAttribute('src',imagearr[i]);
				sub.appendChild(image);

				// create big span
				var bigspan=document.createElement('span');
				bigspan.classList.add('big-span');

				var span1=document.createElement('span');
				span1.classList.add('span1');
				span1.innerHTML=span1Array[i];
				bigspan.appendChild(span1);

				var span2=document.createElement('span');
				span2.classList.add('span2');
				span2.innerHTML=span2arr[i];
				bigspan.appendChild(span2);

				var span3=document.createElement('span');
				span3.classList.add('span3');
				span3.innerHTML=span3arr[i];
				bigspan.appendChild(span3);
				
				part2.appendChild(bigspan);
				post.appendChild(part2);
				// end with part2

				var part3=document.createElement('div');
				part3.classList.add('post-box-3');
				var description=document.createElement('span');
				description.classList.add("description-1");
				description.innerHTML=part3array[i];
				part3.appendChild(description);
				post.appendChild(part3);

				var part4=document.createElement('div');
				part4.classList.add('post-box-4');
				post.appendChild(part4);
				
				// var part5=document.createElement('div');
				// part5.classList.add('post-box-5');
				// post.appendChild(part5);
				
				// var part6=document.createElement('div');
				// part6.classList.add('post-box-6');
				// post.appendChild(part6);
				
				
				

			storyContainer[0].appendChild(post);//we gave parent to grandparents.lol 
		}
		// isme vo starting ka part bata na hello right hai kya ruk ek sec
}