function valida_numero(texto) {
    var Regex = /^[0-9]{2}$/;
    document.getElementById("num").onkeypress = function (e) {
        var chr = String.fromCharCode(e.which);
        if ("1234567890".indexOf(chr) < 0) return false;
    };
    if (Regex.test(texto)) {
        $(".valida_numero").removeClass("is-invalid");
        $(".valida_numero").addClass("is-valid");
    } else {
        $(".valida_numero").addClass("is-invalid");
        $(".valida_numero").removeClass("is-valid");
    }
}

function valida_ano(texto) {
    var Regex = /^([1-2]{1})([0-9]{3})$/;
    document.getElementById("ano").onkeypress = function (e) {
        var chr = String.fromCharCode(e.which);
        if ("1234567890".indexOf(chr) < 0) return false;
    };
    if (Regex.test(texto)) {
        $(".valida_ano").removeClass("is-invalid");
        $(".valida_ano").addClass("is-valid");
    } else {
        $(".valida_ano").addClass("is-invalid");
        $(".valida_ano").removeClass("is-valid");
    }
}

function valida_user(texto) {
    var Regex = /^@[a-z0-9.\_]/i;
    if (Regex.test(texto)) {
        $(".valida_user").removeClass("is-invalid");
        $(".valida_user").addClass("is-valid");
    } else {
        $(".valida_user").addClass("is-invalid");
        $(".valida_user").removeClass("is-valid");
    }
}

function valida_site(texto) {
    var Regex = /^([a-z0-9.\-\_])+.(com.br)$/;
    if (Regex.test(texto)) {
        $(".valida_site").removeClass("is-invalid");
        $(".valida_site").addClass("is-valid");
    } else {
        $(".valida_site").addClass("is-invalid");
        $(".valida_site").removeClass("is-valid");
    }
}
document.getElementById("fone").onkeypress = function (e) {
    var chr = String.fromCharCode(e.which);
    if ("1234567890-".indexOf(chr) < 0) return false;
};
function valida_fone(texto) {
    var formatado = texto.replace(/^(\d{2})(\d{4})(\d{4}).*/, "($1)$2-$3");
    document.getElementById("fone").value = formatado;

    var Regex = /^\([0-9]{2}\)+([0-9]{4})-([0-9]{4})$/i;

    if (Regex.test(formatado)) {
        $(".valida_fone").removeClass("is-invalid");
        $(".valida_fone").addClass("is-valid");
    } else {
        $(".valida_fone").addClass("is-invalid");
        $(".valida_fone").removeClass("is-valid");
    }
}

document.getElementById("cel").onkeypress = function (e) {
    var chr = String.fromCharCode(e.which);
    if ("1234567890".indexOf(chr) < 0) return false;
};

function valida_cel(texto) {
    var formata = texto.replace(/^(\d{2})(\d{2})(\d{5})(\d{4}).*/, "+$1($2)$3-$4");
    document.getElementById("cel").value = formata;

    var Regex = /^\+55\([0-9]{2}\)+([0-9]{5})-([0-9]{4})$/i;
    if (Regex.test(formata)) {
        $(".valida_cel").removeClass("is-invalid");
        $(".valida_cel").addClass("is-valid");
    } else {
        $(".valida_cel").addClass("is-invalid");
        $(".valida_cel").removeClass("is-valid");
    }
}

document.getElementById("rg").onkeypress = function (e) {
    var chr = String.fromCharCode(e.which);
    if ("1234567890".indexOf(chr) < 0) return false;
};

function valida_rg(texto) {
    var formata = texto.replace(/^(\d{2})(\d{3})(\d{3})(\d{2}).*/, "$1.$2.$3-$4");
    document.getElementById("rg").value = formata;

    var Regex = /^([0-9]{2})+.([0-9]{3})+.([0-9]{3})-([0-9][0-9]?)$/i;
    if (Regex.test(formata)) {
        $(".valida_rg").removeClass("is-invalid");
        $(".valida_rg").addClass("is-valid");
    } else {
        $(".valida_rg").addClass("is-invalid");
        $(".valida_rg").removeClass("is-valid");
    }
}

document.getElementById("cpf").onkeypress = function (e) {
    var chr = String.fromCharCode(e.which);
    if ("1234567890".indexOf(chr) < 0) return false;
};

function valida_cpf(texto) {

    var formata = texto.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, "$1.$2.$3-$4");
    document.getElementById("cpf").value = formata;

    var Regex = /^([0-9]{3})+.([0-9]{3})+.([0-9]{3})-([0-9]{2})$/i;
    if (Regex.test(formata)) {
        $(".valida_cpf").removeClass("is-invalid");
        $(".valida_cpf").addClass("is-valid");
    } else {
        $(".valida_cpf").addClass("is-invalid");
        $(".valida_cpf").removeClass("is-valid");
    }
}

document.getElementById("data").onkeypress = function (e) {
    var chr = String.fromCharCode(e.which);
    if ("1234567890".indexOf(chr) < 0) return false;
};

function valida_data(texto) {

    var formata = texto.replace(/^(\d{2})(\d{2})(\d{4}).*/, "$1/$2/$3");
    document.getElementById("data").value = formata;

    var Regex = /^[0-9]{2}\/[0-9]{2}\/[1-2]{1}[0-9]{3}$/i;
    if (Regex.test(formata)) {
        $(".valida_data").removeClass("is-invalid");
        $(".valida_data").addClass("is-valid");
    } else {
        $(".valida_data").addClass("is-invalid");
        $(".valida_data").removeClass("is-valid");
    }
}

document.getElementById("hr").onkeypress = function (e) {
    var chr = String.fromCharCode(e.which);
    if ("1234567890".indexOf(chr) < 0) return false;
};

function valida_hora(texto) {

    var formata = texto.replace(/^(\d{2})(\d{2}).*/, "$1:$2");
    document.getElementById("hr").value = formata;

    var Regex = /^[0-2][0-9]\:[0-9]{2}$/;
    if (Regex.test(formata)) {
        $(".valida_hora").removeClass("is-invalid");
        $(".valida_hora").addClass("is-valid");
    } else {
        $(".valida_hora").addClass("is-invalid");
        $(".valida_hora").removeClass("is-valid");
    }
}

document.getElementById("dthr").onkeypress = function (e) {
    var chr = String.fromCharCode(e.which);
    if ("1234567890".indexOf(chr) < 0) return false;
};

function valida_dthr(texto) {

    var formata = texto.replace(/^(\d{2})(\d{2})(\d{4})(\d{2})(\d{2}).*/, "$1/$2/$3-$4:$5");
    document.getElementById("dthr").value = formata;

    var Regex = /^[0-9]{2}\/[0-9]{2}\/[1-2]{1}[0-9]{3}-[0-2][0-9]\:[0-9]{2}$/i;
    if (Regex.test(formata)) {
        $(".valida_dthr").removeClass("is-invalid");
        $(".valida_dthr").addClass("is-valid");
    } else {
        $(".valida_dthr").addClass("is-invalid");
        $(".valida_dthr").removeClass("is-valid");
    }
}

document.getElementById("din").onkeypress = function (e) {
    var chr = String.fromCharCode(e.which);
    if ("1234567890".indexOf(chr) < 0) return false;
};

function valida_din(texto) {

    var formata = texto.replace(/^(\d{4})(\d{2}).*/, "R$ $1,$2");
    document.getElementById("din").value = formata;

    var Regex = /^R\$ ([0-9]{4})+,([0-9]{2})$/i;
    if (Regex.test(formata)) {
        $(".valida_din").removeClass("is-invalid");
        $(".valida_din").addClass("is-valid");
    } else {
        $(".valida_din").addClass("is-invalid");
        $(".valida_din").removeClass("is-valid");
    }
}
