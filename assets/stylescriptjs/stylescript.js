window.onload = () => {
    StyleScriptJs();
}
if (document.readyState == "complete") {
    StyleScriptJs()
}
var StyleScriptJs = () => {
    // Select All Elements
    let AllElements = document.querySelectorAll('*');

    // Foreach Element
    AllElements.forEach(element => {

        // Get Class String Attribute of Foreach Element
        let elementClassAtt = element.getAttribute('class');

        // Check is Class Attribute is exist or Not
        if (elementClassAtt) {
            //console.log(elementClassAtt);

            // Split and Convert Class into Array
            let elementClassArr = elementClassAtt.split(' ');
            //console.log(elementClassArr);

            // Get Foreach class from Class Array
            elementClassArr.forEach(elmentClass => {
                //console.log(elmentClass);

                //  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Onclick >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                var OnclickClasses=()=>{
                    if (elmentClass.includes('onclick')) {
                        console.log(elmentClass);
                    }
                }
                OnclickClasses();
                // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< End Onclick <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

                // >>>>>>>>>>>>>>>> Grid >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                // Check other classes

                var GridClasses = () => {
                    if (elmentClass.includes('-') && !elmentClass.includes(':')) {
                        //console.log(elmentClass)
                        // Set Grid Columns
                        if (elmentClass.includes('grid')) {
                            //console.log(elmentClass)
                            // Select Grid Class
                            let elmentClassArr = elmentClass.split('-');
                            //console.log(elmentClassArr);
                            //console.log(elmentClassArr.length);
                            let gridColumns = elmentClassArr[elmentClassArr.length - 1];
                            //console.log(gridColumns);
                            let gridColumnsClass = document.querySelectorAll('.' + elmentClass);
                            gridColumnsClass.forEach(gridcol => {
                                gridcol.style.setProperty('grid-template-columns', 'repeat(' + gridColumns + ',1fr)');
                            });

                            if (elmentClass.includes('gap')) {
                                //console.log(elmentClass)
                                let gap = gridColumns;
                                let gridGapClass = document.querySelectorAll('.' + elmentClass);
                                gridGapClass.forEach(gridGap => {
                                    gridGap.style.setProperty('grid-gap', gap);
                                });
                            }
                        }
                    }
                }
                GridClasses();
                // <<<<<<<<<<<<<<<<<< End Grid <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

                // Check Class is Style Class
                if (elmentClass.includes(':')) {
                    //console.log(elmentClass);

                    // Split Convert Style Class into Array
                    let styleValueArr = elmentClass.split(':');
                    //console.log(styleValueArr);

                    // Get Style
                    let styleIs = styleValueArr[0];
                    //console.log(styleIs);
                    // Get Style Value
                    let styleValueIs = styleValueArr[1];
                    //console.log(styleValueIs);

                    if (styleValueIs.includes('/')) {
                        //console.log(styleValueIs);
                        styleValueIs = styleValueIs.replace(/\//g, " ");
                        //console.log(styleValueIs);
                    }

                    //let Select Class to Style 
                    let ClassIs = document.getElementsByClassName(elmentClass);
                    for (let i = 0; i < ClassIs.length; i++) {
                        const classis = ClassIs[i];
                        //console.log(classis)
                        classis.style.setProperty(styleIs, styleValueIs);
                    }

                    if (elmentClass.includes('hover')) {
                        // Get Style
                        let styleIs = styleValueArr[0];
                        //console.log(styleIs);
                        // Get Style Value
                        let styleValueIs = styleValueArr[1];
                        //console.log(styleValueIs);

                        if (styleValueIs.includes('/')) {
                            //console.log(styleValueIs);
                            styleValueIs = styleValueIs.replace(/\//g, " ");
                            //console.log(styleValueIs);
                        }
                        let hoverStyleValueIs = styleValueArr[3];

                        if (hoverStyleValueIs.includes('/')) {
                            //console.log(styleValueIs);
                            hoverStyleValueIs = hoverStyleValueIs.replace(/\//g, " ");
                            //console.log(styleValueIs);
                        }

                        //let Select Class to Style 
                        let ClassIs = document.getElementsByClassName(elmentClass);
                        for (let i = 0; i < ClassIs.length; i++) {
                            const classis = ClassIs[i];
                            //console.log(classis)
                            classis.style.setProperty(styleIs, styleValueIs);


                            classis.addEventListener('mouseover', () => {
                                classis.style.setProperty(styleIs, hoverStyleValueIs);
                            });
                            classis.addEventListener('mouseout', () => {
                                classis.style.setProperty(styleIs, styleValueIs);
                            });
                        }
                    }
                }

                if (elmentClass.includes('-') && !elmentClass.includes(':')) {
                    //console.log(elmentClass);

                    let styleValueArr = '';
                    styleValueArr = elmentClass.split('-');

                    //console.log(styleValueArr);
                    let styleIs = '';
                    let styleValueIs = '';

                    if (styleValueArr.length == 2) {
                        //console.log(elmentClass);

                        // Get Style
                        styleIs = styleValueArr[0];
                        //console.log(styleIs);

                        // Get Style Value
                        styleValueIs = styleValueArr[1];
                        //console.log(styleValueIs);
                    }
                    else if (styleValueArr.length == 3) {
                        // Get Style
                        styleIs = styleValueArr[0] + '-' + styleValueArr[1];
                        //console.log(styleIs);

                        // Get Style Value
                        styleValueIs = styleValueArr[2];
                        //console.log(styleValueIs);
                    }

                    if (styleIs.includes('bg')) {
                        styleIs = styleIs.replace('bg', 'background');
                        //console.log(styleIs);
                    }

                    if (styleValueIs.includes('/')) {
                        //console.log(styleValueIs);
                        styleValueIs = styleValueIs.replace(/\//g, " ");
                        //console.log(styleValueIs);
                    }

                    //let Select Class to Style 
                    let ClassIs = document.getElementsByClassName(elmentClass);
                    for (let i = 0; i < ClassIs.length; i++) {
                        const classis = ClassIs[i];
                        //console.log(classis)
                        classis.style.setProperty(styleIs, styleValueIs);
                    }

                    if (elmentClass.includes('hover')) {
                        let styleIs = '';
                        let styleValueIs = '';
                        let hoverStyleValueIs = '';
                        console.log(elmentClass);
                        if (styleValueArr.length == 4) {
                            console.log(elmentClass);

                            // Get Style
                            styleIs = styleValueArr[0];
                            //console.log(styleIs);

                            // Get Style Value
                            styleValueIs = styleValueArr[1];
                            //console.log(styleValueIs);

                            hoverStyleValueIs = styleValueArr[3];
                        }
                        else if (styleValueArr.length == 5) {
                            // Get Style
                            styleIs = styleValueArr[0] + '-' + styleValueArr[1];
                            //console.log(styleIs);

                            // Get Style Value
                            styleValueIs = styleValueArr[2];
                            //console.log(styleValueIs);

                            hoverStyleValueIs = styleValueArr[4];
                        }

                        if (styleIs.includes('bg')) {
                            styleIs = styleIs.replace('bg', 'background');
                            console.log(styleIs);
                        }

                        if (styleValueIs.includes('/')) {
                            //console.log(styleValueIs);
                            styleValueIs = styleValueIs.replace(/\//g, " ");
                            //console.log(styleValueIs);
                        }


                        if (hoverStyleValueIs.includes('/')) {
                            //console.log(styleValueIs);
                            hoverStyleValueIs = hoverStyleValueIs.replace(/\//g, " ");
                            //console.log(styleValueIs);
                        }

                        //let Select Class to Style 
                        let ClassIs = document.getElementsByClassName(elmentClass);
                        for (let i = 0; i < ClassIs.length; i++) {
                            const classis = ClassIs[i];
                            //console.log(classis)
                            classis.style.setProperty(styleIs, styleValueIs);


                            classis.addEventListener('mouseover', () => {
                                classis.style.setProperty(styleIs, hoverStyleValueIs);
                            });
                            classis.addEventListener('mouseout', () => {
                                classis.style.setProperty(styleIs, styleValueIs);
                            });
                        }
                    }
                }

                // ==================================================================================

                //                       Media Queries for Responsive                                //

                var StyleScriptCssMediaQueries = () => {
                    // Check Class is Style Class
                    if (elmentClass.includes(':') && elmentClass.includes('ww')) {
                        //console.log(elmentClass);

                        // Split Convert Style Class into Array
                        let styleValueArr = elmentClass.split(':');
                        //console.log(styleValueArr);

                        // Get Style
                        let styleIs = styleValueArr[1];
                        //console.log(styleIs);
                        // Get Style Value
                        let styleValueIs = styleValueArr[2];
                        //console.log(styleValueIs);

                        if (styleValueIs.includes('/')) {
                            //console.log(styleValueIs);
                            styleValueIs = styleValueIs.replace(/\//g, " ");
                            //console.log(styleValueIs);
                        }

                        //let Select Class to Style 
                        let ClassIs = document.getElementsByClassName(elmentClass);
                        for (let i = 0; i < ClassIs.length; i++) {
                            const classis = ClassIs[i];
                            //console.log(classis)
                            classis.style.setProperty(styleIs, styleValueIs);
                        }

                        if (elmentClass.includes('hover')) {
                            // Get Style
                            let styleIs = styleValueArr[1];
                            //console.log(styleIs);
                            // Get Style Value
                            let styleValueIs = styleValueArr[2];
                            //console.log(styleValueIs);

                            if (styleValueIs.includes('/')) {
                                //console.log(styleValueIs);
                                styleValueIs = styleValueIs.replace(/\//g, " ");
                                //console.log(styleValueIs);
                            }
                            let hoverStyleValueIs = styleValueArr[4];

                            if (hoverStyleValueIs.includes('/')) {
                                //console.log(styleValueIs);
                                hoverStyleValueIs = hoverStyleValueIs.replace(/\//g, " ");
                                //console.log(styleValueIs);
                            }

                            //let Select Class to Style 
                            let ClassIs = document.getElementsByClassName(elmentClass);
                            for (let i = 0; i < ClassIs.length; i++) {
                                const classis = ClassIs[i];
                                //console.log(classis)
                                classis.style.setProperty(styleIs, styleValueIs);

                                classis.addEventListener('mouseover', () => {
                                    classis.style.setProperty(styleIs, hoverStyleValueIs);
                                    //console.log('Value '+styleValueIs);
                                });
                                classis.addEventListener('mouseout', () => {
                                    classis.style.setProperty(styleIs, styleValueIs);
                                    // console.log('Value '+styleValueIs);
                                });
                            }


                        }


                    }

                }

                function RespnsiveMediaQueries() {
                    var A = window.matchMedia("(max-width: 1000px)");
                    var a = window.matchMedia("(max-width: 900px)");
                    var b = window.matchMedia("(max-width: 800px)");
                    var c = window.matchMedia("(max-width: 700px)");
                    var x = window.matchMedia("(max-width: 600px)");
                    var y = window.matchMedia("(max-width: 425px)");
                    var z = window.matchMedia("(max-width: 300px)");
                    if (A.matches == true && a.matches == false && b.matches != true && c.matches != true && x.matches != true && y.matches != true && z.matches != true) {
                        if (elmentClass.includes('ww1000px')) {
                            //console.log('900 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                    }
                    else if (A.matches == true && a.matches == true && b.matches != true && c.matches != true && x.matches != true && y.matches != true && z.matches != true) {
                        if (elmentClass.includes('ww900px')) {
                            //console.log('900 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                    }
                    else if (A.matches == true && a.matches == true && b.matches == true && c.matches != true && x.matches != true && y.matches != true && z.matches != true) {
                        if (elmentClass.includes('ww900px')) {
                            //console.log('900 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                        if (elmentClass.includes('ww800px')) {
                            //console.log('800 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                    }
                    else if (A.matches == true && a.matches == true && b.matches == true && c.matches == true && x.matches != true && y.matches != true && z.matches != true) {
                        if (elmentClass.includes('ww900px')) {
                            //console.log('900 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                        if (elmentClass.includes('ww800px')) {
                            //console.log('800 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                        if (elmentClass.includes('ww700px')) {
                            //console.log('700 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                    }
                    else if (A.matches == true && a.matches == true && b.matches == true && c.matches == true && x.matches == true && y.matches != true && z.matches != true) {
                        if (elmentClass.includes('ww900px')) {
                            //console.log('900 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                        if (elmentClass.includes('ww800px')) {
                            //console.log('800 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                        if (elmentClass.includes('ww700px')) {
                            //console.log('700 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                        if (elmentClass.includes('ww600px')) {
                            //console.log('600 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                    }
                    else if (A.matches == true && a.matches == true && b.matches == true && c.matches == true && x.matches == true && y.matches == true && z.matches != true) {
                        if (elmentClass.includes('ww900px')) {
                            //console.log('900 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                        }
                        if (elmentClass.includes('ww800px')) {
                            //console.log('800 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                        if (elmentClass.includes('ww700px')) {
                            //console.log('700 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                        if (elmentClass.includes('ww600px')) {
                            //console.log('600 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                        if (elmentClass.includes('ww425px')) {
                            //console.log('425 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                    }
                    else if (A.matches == true && a.matches == true && b.matches == true && c.matches == true && x.matches == true && y.matches == true && z.matches == true) {
                        if (elmentClass.includes('ww900px')) {
                            //console.log('900 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                        if (elmentClass.includes('ww800px')) {
                            //console.log('800 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                        if (elmentClass.includes('ww700px')) {
                            //console.log('700 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                        if (elmentClass.includes('ww600px')) {
                            //console.log('600 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                        if (elmentClass.includes('ww425px')) {
                            //console.log('425 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                        if (elmentClass.includes('ww300px')) {
                            //console.log('300 > ' + elmentClass);
                            StyleScriptCssMediaQueries()
                            GridClasses();
                        }
                    }
                    else {
                        //setTimeout(StyleScriptJs, 0);
                    }

                }
                window.addEventListener('resize', RespnsiveMediaQueries);
                setTimeout(function () {
                    RespnsiveMediaQueries();
                }, 0);
                // x.addListener(RespnsiveMediaQueries)
                // y.addListener(RespnsiveMediaQueries)
                // z.addListener(RespnsiveMediaQueries)

                // =================================================================================



            });
        }

    });

    // Child Loop
    var childLoop = () => {
        let allElements = document.querySelectorAll('*');
        allElements.forEach(element => {
            let classAtt = element.getAttribute('class');
            if (classAtt) {
                let classArr = classAtt.split(' ');
                classArr.forEach(classIs => {
                    if (classIs.includes('loop-child-')) {
                        let parentElementIs = document.querySelectorAll('.' + classIs);
                        parentElementIs.forEach(parentIs => {
                            let parentElementClass = parentIs.getAttribute('class');
                            let parentElementClassArr = parentElementClass.split(' ');
                            parentElementClassArr.forEach(targetClass => {
                                if (targetClass.includes('loop-child-')) {
                                    //console.log(targetClass);
                                    let loopCounts = targetClass.split('-')[2];
                                    //console.log(loopCounts);
                                    let targetParent = document.querySelectorAll('.' + targetClass);
                                    targetParent.forEach(targetBox => {
                                        let loopChildElement = targetBox.innerHTML;
                                        //console.log(loopChildElement);
                                        let block = '';
                                        for (let i = 0; i < loopCounts; i++) {
                                            block += loopChildElement;
                                        }
                                        targetBox.innerHTML = block;
                                    });
                                }
                            });

                        });

                    }
                });
            }
        });
    }
    childLoop();
}
StyleScriptJs()



