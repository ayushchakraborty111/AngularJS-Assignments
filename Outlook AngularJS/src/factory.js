app.factory('Factory', Factory);

Factory.$inject = ['$q', '$timeout'];
function Factory($q, $timeout)
{
    var folder = [
        {
            name: "Inbox",
            id: 1,
            description: "incoming messages will be stored here",
            messages: [
                {
                    content: "I am content1",
                    subject: "I am subject1",
                    id: 0,
                    isDeleted: false
                },
                {
                    content: "I am content2",
                    subject: "I am subject2",
                    id: 1,
                    isDeleted: false
                },
                {
                    content: "I am content3",
                    subject: "I am subject3",
                    id: 2,
                    isDeleted: false
                },
                {
                    content: "I am content4",
                    subject: "I am subject4",
                    id: 3,
                    isDeleted: false
                },
            ]
        },
        {
            name: "Junk_Items",
            id: 2,
            description: "",
            messages: [
                {
                    content: "I am content1",
                    subject: "I am subject1",
                    id: 0,
                    isDeleted: false
                },
                {
                    content: "I am content2",
                    subject: "I am subject2",
                    id: 1,
                    isDeleted: false
                }
            ]
        },
        {
            name: "Sent_Items",
            id: 3,
            description: "Sent Items will be stored here",
            messages: [
                {
                    content: "I am content1",
                    subject: "I am subject1",
                    id: 0,
                    isDeleted: false
                },
                {
                    content: "I am content2",
                    subject: "I am subject2",
                    id: 1,
                    isDeleted: false
                },
                {
                    content: "I am content3",
                    subject: "I am subject3",
                    id: 2,
                    isDeleted: false
                }
            ]
        },
        {
            name: "Delete_Items",
            id: 4,
            description: "",
            messages: []
        },
    ]
    var factoryObj = {};
    factoryObj.getMessage = function(folderId)
    {
        var deferred = $q.defer();
            var msg = [];
            msg = folder[folderId].messages;
            deferred.resolve(msg);
        return deferred.promise;
    }
    factoryObj.getAllFolder = function()
    {
        return folder;
    }
    factoryObj.getInput = function()
    {
        var input1 = '';
        return input1;
    }
    factoryObj.content = function()
    {
        var content = '';
        return content;
    }
    factoryObj.subject = function()
    {
        var subject = '';
        return subject;
    }
    factoryObj.messagesArray = function()
    {
        var messageArray = [];
        return messageArray;
    }
    factoryObj.showAlert = function()
    {
        return false;
    }
    return factoryObj;
}
