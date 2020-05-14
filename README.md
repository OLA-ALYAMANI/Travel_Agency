[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## Travel Agency website
### Idea
a Full-stack application for discovering kingdom Saudi Arabia city that provides paid trip packages  






### Wireframes
![waireframes](imageReadme/Homewaireframe.png)


###  Screenshot of the app


### Entity Relationship Diagram (ERD)
### Catalog of routes 
| route | method | Description |
|:-----------|:---------------|-------------|
| `'city_information'` | `Get` | return all city information |
| `'place'` | `Get` | return all city information |
| `'package'` | `Get` | return all city information |
| `'users/signup'` | `Post` | return all city information |
| `'/auth/login'` | `Post` | return all city information |
| `'/auth/current_user'` | `Get` | return all city information |
| `'orderCreate'` | `Post` | return all city information |
| `'orderList'` | `Get` | return all city information |
| `'orderDelete/:id'` | `Delete` | return all city information |

### Set up and installation instructions In your terminal
```
- yarn install --check-files
- bundle install
- rake db:drop 
- rake db:setup
- rake db:migrate
- rails s
```
### Deployment link 