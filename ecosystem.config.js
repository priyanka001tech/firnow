module.exports = {
  apps: [
    // {
    //   interpreter: '.venv/Scripts/python.exe',
    //   interpreter_args: '-m services.auth',
    //   name: 'Authentication Service',
    //   script: 'python',
    //   watch: false,
    //   max_memory_restart: '256M',
    //   kill_timeout: 5000,
    //   restartDelay: 2000,
    // },
    // {
    //   interpreter: '.venv/Scripts/python.exe',
    //   interpreter_args: '-m services.general',
    //   name: 'General Service',
    //   script: 'python',
    //   watch: false,
    //   max_memory_restart: '256M',
    //   kill_timeout: 5000,
    //   restartDelay: 2000,
    // },
    // {
    //   interpreter: '.venv/Scripts/python.exe',
    //   interpreter_args: '-m services.id',
    //   name: 'Identification Service',
    //   script: 'python',
    //   watch: false,
    //   max_memory_restart: '256M',
    //   kill_timeout: 5000,
    //   restartDelay: 2000,
    // },
    // {
    //   interpreter: '.venv/Scripts/python.exe',
    //   interpreter_args: '-m services.location',
    //   name: 'Location Service',
    //   script: 'python',
    //   watch: false,
    //   max_memory_restart: '256M',
    //   kill_timeout: 5000,
    //   restartDelay: 2000,
    // },
    {
      interpreter: '/bin/bash',
      interpreter_args: 'redocly preview-docs',
      name: 'API Docs',
      script: 'redocly.yaml',
      watch: false,
      max_memory_restart: '128M',
      kill_timeout: 5000,
      restartDelay: 2000,
    }
  ],
};
