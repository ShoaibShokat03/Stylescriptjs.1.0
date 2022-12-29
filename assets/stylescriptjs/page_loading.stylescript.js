// Set Page Loading and Progress
var PageLoading = () => {
    let page_progress = 0;
    if (document.readyState == "complete") {
        page_progress = 100;
    }
    // Get Progress Bar
    let progress_elm = document.querySelectorAll('.page-progress');
    const Progress = () => {
        progress_elm.forEach(prog_perc => {
            //console.log(page_progress);
            prog_perc.style.width = page_progress + "%";
            if (page_progress >= 100) {
                prog_perc.parentElement.style.setProperty('display', 'none');
            }
        });
    }
    // =========== End Progress Bar ================

    // Get Page Loader
    let Loader_elm = document.querySelectorAll(".page-loader");
    const Loader = () => {
        Loader_elm.forEach(loader => {
            if (page_progress >= 100) {
                loader.style.setProperty('display', 'none');
            }
        });
    }

    //  ============= End Page Loader

    // Get Page Progress Time
    let loadingTime = performance.now();
    loadingTime = loadingTime / 100;

    // Count Progress Percentage
    const ProgressCount = () => {
        if (page_progress < 100) {
            page_progress++;
            //console.log(page_progress);
            if (progress_elm) {
                Progress();
            }

            if (Loader_elm) {
                Loader();
            }
        }
        else {
            clearInterval(page_progress_intv);
        }
    }
    //  Set Interval to get Page Progress Percentage
    let page_progress_intv = setInterval(ProgressCount, loadingTime);
}
PageLoading();
if (document.readyState == "complete") {
    let pageLoader = document.getElementById('page-loader');
    if (pageLoader) {
        pageLoader.style.display = 'none';
    }

    let pageProgress = document.getElementById('page-progress');
    if (pageProgress) {
        pageProgress.style.display = 'none';
    }

}
//=======================================================================

// ============================== Move Pages ==============================
var MovPage = (tagName) => {
    let actionLink = document.querySelectorAll(tagName);
    //console.log(actionLink)
    actionLink.forEach(aLink => {
        aLink.addEventListener('click', function (e) {
            e.preventDefault();
            let link = this.getAttribute('href');
            //console.log(link);
            $('body').load(link);
        });
    });
}
MovPage('a');

// ============================== Move Pages ==============================

var LoadLazyImages = () => {
    // Select all the images that need to be lazy loaded
    const images = document.querySelectorAll('img[data-src]');

    // The intersection observer callback function
    function lazyLoad(entries) {
        // Loop through the entries
        entries.forEach(entry => {
            // If the image is in view
            if (entry.isIntersecting) {
                // Get the image
                const img = entry.target;

                // Set the src attribute of the image to the value of the data-src attribute
                img.src = img.dataset.src;

                // Remove the data-src attribute so that the image is not loaded again
                img.removeAttribute('data-src');

                // Unobserve the image
                observer.unobserve(img);
            }
        });
    }

    // Create the intersection observer
    const observer = new IntersectionObserver(lazyLoad);

    // Observe each image
    images.forEach(img => {
        observer.observe(img);
    });
}
LoadLazyImages()