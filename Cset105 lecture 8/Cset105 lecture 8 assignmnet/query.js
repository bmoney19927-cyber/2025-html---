console.log(document.getElementsByTagName("a")[0].target === "");

document.getElementsByTagName("a")[0].target = "_blank";

 console.log(document.getElementsByTagName("a")[0].target);