# LogComex FrontEnd

Here is the Front-End for user authentication (Login), using the LogComex Oauth2 API.

## Instalation

- Clone the repo using git command: `git clone git@github.com:upcesar/logcomex-frontend.git`. Project files are copied into the new folder `logcomex-frontend`.
- Create a new Homestead VM or setup the existing one. For further instructions about creating the environment: https://laravel.com/docs/5.4/homestead
- Once downloaded the Homestead VM, edit the file `src/stubs/Homestead.yaml` to setup folders, sites and databases

`
folders:

    - map: ~/my/laravel/folders
      to: /home/vagrant/Code

sites:

    - map: logcomex-frontend.local
      to: /home/vagrant/Code/my/laravel/folders/logcomex-frontend/public
      
    - map: www.logcomex-frontend.local
      to: /home/vagrant/Code/my/laravel/folders/logcomex-frontend/public

`
- Execute in Homestead folder `bash init.sh` (Linux / Git Bash) or `init.bat` (Windows Cmd or Powershell).
- Execute `vagrant up` and then `vagrant ssh`. If VM was previously created, execute `vagrant provision` or `vagrant reload --provision` instead.
- Edit the "client_secret" in "/resource/assets/js/app.js", line 48, prior deployed the "logcomex-oauth2". Seek the "client_secret" in "oath_client" table.
- Finally, in the VM (guest) go to the folder `cd ~/Code/logcomex-frontend` and then `npm install` to install all dependencies and then `npm run dev` to compile the JS and CSS.
- You're done
