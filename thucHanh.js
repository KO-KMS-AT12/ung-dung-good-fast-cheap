let good = document.getElementById('good');
let fast = document.getElementById('fast');
let cheap = document.getElementById('cheap');

function check() {
    if (good.checked) {
        if (fast.checked) {
            cheap.checked = false;
        } else if (!fast.checked) {
            cheap.checked = true;
        } else if (!cheap.checked) {
            fast.checked = true;
        } else if (cheap.checked) {
            fast.checked = false;
        }
    } else if (fast.checked) {
        if (good.checked) {
            cheap.checked = false;
        } else if (!good.checked) {
            cheap.checked = true;
        } else if (!cheap.checked) {
            good.checked = true;
        } else if (cheap.checked) {
            good.checked = false;
        }
    } else if (cheap.checked) {
        if (good.checked) {
            fast.checked = false;
        } else if (!good.checked) {
            fast.checked = true;
        } else if (!fast.checked) {
            good.checked = true;
        } else if (fast.checked) {
            good.checked = false;
        }
    }
}