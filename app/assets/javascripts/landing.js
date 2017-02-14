$( document ).ready(function() {

    console.log( "ready!" );

    $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
    }
    );

    $('.modal').modal();
    $('#modal1').modal('open');
    $('#modal1').modal('close');

});
