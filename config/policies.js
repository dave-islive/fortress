module.exports.policies = {

  // Default policy for all controllers and actions
  // (`true` allows public access)
  '*': false,

  MessageController: {
    create  : ['isAuthenticated', 'hasUsername', 'complementReply'],
    inbox   : ['isAuthenticated'],
    find    : 'inboxSetUser',
    markRead: ['isAuthenticated']
  },

  ConnectController: {
    getcookie: true
  },

  UserController: {
    login      : true,
    getIdentity: 'isAuthenticated'
  },

  VisitorController: {
    find       : ['isAuthenticated', 'resolveVisitorIdentity', 'ownsVisitorRecord'],
    setUsername: ['isAuthenticated', 'isVisitor']
  },

  ThreadController: {
    create  : ['isAuthenticated', 'hasUsername', 'complementNewThread'],
    findOne : ['isAuthenticated', 'hasUsername'],
    markRead: ['isAuthenticated']
  },

  PerformerController: {
    find: true
  }
};
