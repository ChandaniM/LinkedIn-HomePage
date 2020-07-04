window.onload=function(){
	creator();
}

var spanbox=["<b>Kaushik Mishra ,Ayush jain</b> and 272 other,<br> Connections follows <b>LinkedIn  Marketing Solution</b>",
			"<b>Bhavesh Jain</b> and 2 others follow LinkedIn Marketing <br>Solution",
			"Chandani Mourya and 7 others follow LinkedIn Marketing <br>Solution ","","New post in HTML5 / CSS3 / Javascript (HTML / CSS / JS)"
			];
var imagearr=[
"https://media-exp1.licdn.com/dms/image/C560BAQHYyjZVOa4b1A/company-logo_200_200/0?e=1602115200&v=beta&t=2I3UbFjNhlfURiD1ejxqCnCWH9vCyeCCclPLDYh_7Mc",
"https://media-exp1.licdn.com/dms/image/C560BAQHYyjZVOa4b1A/company-logo_200_200/0?e=1602115200&v=beta&t=2I3UbFjNhlfURiD1ejxqCnCWH9vCyeCCclPLDYh_7Mc",
"https://scontent.fbom32-1.fna.fbcdn.net/v/t1.0-1/p720x720/82865336_10157863136595040_1889987516652584960_o.jpg?_nc_cat=1&_nc_sid=dbb9e7&_nc_oc=AQnwuXAMcVRVt7STSuMZpdKgHOLXxV_b2UcbRpG8aciWxxmkfdMkDxYxydfXSKO1H9o&_nc_ht=scontent.fbom32-1.fna&_nc_tp=6&oh=c4b57646b8771f1f4c4177342ddff8d4&oe=5F26B4D4",
"https://media-exp1.licdn.com/dms/image/C510BAQFcrHMUm7htNw/company-logo_100_100/0?e=1602115200&v=beta&t=3zYm5LPv8sUSp9M0qMNpRrG87kylc0Og1Lfc0JPRfF8",
"https://images.unsplash.com/photo-1558643753-6928c72e12b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
""
];
var span1Array=["Linkedin marketing solutions",
				"Linkedin marketing solutions","<b>Robin Sharma</b> ","Ampersand Group"];
var span2arr=["4,259,248 followers","4,261,612 followers","Leadership Missionary, Humanitarian and Bestselling Author","Education Management. mumbai|Maharashtra"];
var span3arr=["Promoted","Promoted","","651 followers"];
// part3 ka arr
var part3array=["Leverage your linkedin Page to its full potential.Boost engagement of a post with $50 in free LinkedIn ad credits. ",
"Leverage your linkedin Page to its full potential.Boost engagement of a post with $50 in free LinkedIn ad credits.",
"In today's episode of The Daily Mastery podcast, I share how ultra-high impact people build their days around doing difficult things.",
"We proudly partnered with J&K Government for a 5 day teacher training programme which enhanced the skill set of around 50 teachers. ",
"Participants of the PDP Teacher Training programme seek more such training in the future and call this a turning point in their career."];
// message-link
var messagearr=["<b>B2B Advertising Promo|LinkedIn Marketing Solutions</b>"];
var likearr=["18,266","45,100","100","50"];
var commentarr=["527 comments","100 comments","17 comments","507 comments","30 comments"]
var textmsgarr=["Like","Comment","Share","Send"];
function creator(){	
	var storyContainer=document.getElementsByClassName('middle-container');
		for (var i = 0; i<5; i++) {
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

				var profilecontainer=document.createElement('div');
				profilecontainer.classList.add('profile-container');
				var post_img=document.createElement("img");
				post_img.classList.add('proflie');
				post_img.setAttribute('src',"https://images.unsplash.com/photo-1558643753-6928c72e12b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9");
				profilecontainer.appendChild(post_img);
				post.appendChild(profilecontainer);
				
				if(i==0){
				var linkpart=document.createElement('div');
				linkpart.classList.add('link-message');
			
				var spanBox=document.createElement('div');
				spanBox.classList.add('meg');
				linkpart.appendChild(spanBox);
				spanBox.innerHTML=messagearr[i];
				var a=document.createElement('a');
				a.classList.add('link-msg');
				a.setAttribute('href',"business.linkedin.com");
				a.innerHTML="business.linkedin.com";
				linkpart.appendChild(a);
				post.appendChild(linkpart);
				}
				

				var part6=document.createElement('div');
				part6.classList.add('like-section','container','flex');
				var likebox=document.createElement('span');
				likebox.classList.add('like');
				likebox.innerHTML=likearr[i];
				part6.appendChild(likebox);
				var commentbox=document.createElement('span');
				commentbox.classList.add('commentbox');
				commentbox.innerHTML=commentarr[i];
				part6.appendChild(commentbox);
				post.appendChild(part6);

				
				var iconstray=document.createElement('div');
				iconstray.classList.add('iconsTray');
				var iconssubtray=document.createElement('div');
				iconssubtray.classList.add('iconssubTray');
				iconssubtray.classList.add('flex');
				iconstray.appendChild(iconssubtray);
						
				let like=document.createElement('i');
				like.classList.add('fa','fa-thumbs-o-up');
				iconssubtray.appendChild(like);
				like.style.fontSize='1.5rem';


				let comment=document.createElement('i');
				comment.classList.add('fa','fa-comments-o');
				iconssubtray.appendChild(comment);
				comment.style.fontSize='1.5rem';

				let share=document.createElement('i');
				share.classList.add('fa','fa-share-alt');
				iconssubtray.appendChild(share);
				share.style.fontSize='1.5rem';

				let send=document.createElement('i');
				send.classList.add('fa','fa-paper-plane-o');
				iconssubtray.appendChild(send);
				send.style.fontSize='1.5rem';
				// var textmsg=document.createElement('span');
				// textmsg.classList.add('message');
				// textmsg.innerHTML=textmsgarr[i]
				// iconssubtray.appendChild(textmsg);

				post.appendChild(iconstray);
				

			storyContainer[0].appendChild(post);//we gave parent to grandparents.lol 
		}
		// isme vo starting ka part bata na hello right hai kya ruk ek sec
}