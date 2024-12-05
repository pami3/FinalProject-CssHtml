 const toggleButten = document.getElementById('toggle');
 const sideBar=document.querySelector('.side-bar');
 const content=document.querySelector('.content');
 const sideBarSpan=document.querySelector('.side_bar_container span');
 const sideBarHeader=document.querySelector('.side_bar_container h6');
 
 let toggleFlag = true; 
 toggleButten.addEventListener('click',()=>{
if(toggleFlag){

    toggleButten.classList.remove('.fa-toggle-off');
    toggleButten.classList="fa fa-toggle-on";
    sideBar.style.width="5%";
    content.style.width="95%";
    toggleFlag= false;
}else{

    toggleButten.classList.remove('.fa-toggle-on');
    toggleButten.classList="fa fa-toggle-off";
    sideBar.style.width="20%";
    content.style.width="80%";
    toggleFlag = true;
}





 });