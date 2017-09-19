$(function () {
    //var klantenTabel = $.getJSON("../klantenTabel.json");
    //console.log(JSON.stringify(klantenTabel));
    //console.log(klantenTabel);


$('#grid').w2grid({
    name: 'grid',
    header: 'List of Names',
    show: {
        toolbar: true,
        footer: true
    },
    columns: [
        { field: 'recid', caption: 'ID', size: '50px', sortable: true, attr: 'align=center' },
        { field: 'lname', caption: 'Last Name', size: '30%', sortable: true, resizable: true },
        { field: 'fname', caption: 'First Name', size: '30%', sortable: true, resizable: true },
        { field: 'email', caption: 'Email', size: '40%', resizable: true },
        { field: 'sdate', caption: 'Start Date', size: '120px', resizable: true },
    ],
    searches: [
        { field: 'lname', caption: 'Last Name', type: 'text' },
        { field: 'fname', caption: 'First Name', type: 'text' },
        { field: 'email', caption: 'Email', type: 'text' },
    ],
    sortData: [{ field: 'recid', direction: 'ASC' }],
    records: [
        { recid: 1, fname: 'John', lname: 'doe', email: 'jdoe@gmail.com', sdate: '4/3/2012' }       
    ]
});
});