const color=["34495e","2c3e50","ffffff"];/**/const holiday={},now=new Date,timetable=JSON.parse(decodeURIComponent("__DATA__"));let day=now.getDay();const date=now.getFullYear()+"_"+(now.getMonth()+1)+"_"+now.getDate();function getNext(){let e={1:"8:00",2:"9:00",3:"10:00",4:"11:00",5:"13:00",6:"14:00",7:"15:00",8:"16:00","8.5":"17:00",9:"18:40",10:"19:30",11:"20:25",12:"21:15","4.5":"12:50"},o={1:"8:50",2:"9:50",3:"10:50",4:"11:50",5:"13:50",6:"14:50",7:"15:50",8:"16:50","8.5":"17:50",9:"19:25",10:"20:15",11:"21:10",12:"22:00","4.5":"12:50"};if(void 0===timetable[day]||!(timetable[day].length>=0))return!1;for(t of timetable[day]){let l=new Date;if(e[t.p.split("-")[1]]&&(l.setHours(e[t.p.split("-")[1]].split(":")[0],e[t.p.split("-")[1]].split(":")[1],0),l>=now))return(nt=t).st=e[t.s],nt.et=o[t.p.split("-")[1]],nt}}function createWidget(){let e=new LinearGradient;e.locations=[0,1],e.colors=[new Color(color[0]),new Color(color[1])];let o=new ListWidget;o.backgroundGradient=e;let l=getNext();if(l){let _=o.addText("下一堂課");_.textColor=new Color(color[2]),_.textOpacity=.9,_.font=Font.mediumSystemFont(12),o.addSpacer(8);let n=o.addText(l.n);n.textColor=new Color(color[2]),n.font=Font.boldSystemFont(16),o.addSpacer(4);let d=o.addText(l.c);d.textColor=new Color(color[2]),d.font=Font.systemFont(14);let $=o.addText(`${l.st} ~ ${l.et} `);$.textColor=new Color(color[2]),$.font=Font.systemFont(14),config.runsWithSiri&&Speech.speak(`你在 ${l.st} 節有一門 ${l.n}`)}else if(holiday[date]&&-1==holiday[date][0]){let a=o.addText("今天是"+holiday[date][1]+"！");a.textColor=new Color(color[2]),a.font=Font.boldSystemFont(18),config.runsWithSiri&&Speech.speak("今天是"+holiday[date][1]+"！")}else{let i=o.addText("今天沒有課了！");i.textColor=new Color(color[2]),i.font=Font.boldSystemFont(18),config.runsWithSiri&&Speech.speak("今天沒有課了！")}return o}holiday[date]&&(day=holiday[date][0]);let widget=createWidget();config.runsInWidget?Script.setWidget(widget):widget.presentMedium(),Script.complete();