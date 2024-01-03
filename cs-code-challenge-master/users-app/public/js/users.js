

window.onload = () => {

    var list = `
    <ul class="users_list">
    {{#each users}}
    
        <li class="user" data-id={{@index}} id="user-id-{{@index}}">

        <div class="user-content">
        
            <div>
                <img src="{{this.avatar}}" class="user-image">
            </div>
            <div>
                <h4>{{this.name}}</h4>
            </div>

            <div>
                <button onclick=showData({{@index}}) class="btn-view">View</button>
            </div>

        </div>

        <div class="hidden user-details" id="user-details-{{@index}}">
            <div>
                <h3>ID: {{this.id}}</h3>
            </div>


            <div>
                <h3>Created At: {{this.createdAt}}</h3>
            </div>
        </div>


        </li>
    
    {{/each}}
    </ul>
    `

    var template = Handlebars.compile(list)

    // Get List of Users
    fetch('https://5dc588200bbd050014fb8ae1.mockapi.io/assessment')
        .then(response => response.json())
        .then(data => {

            const information = template({ users: data })
            document.querySelector("#users-container").innerHTML = information;

        });



}


let showData = (id) => {
    const element = document.querySelector(`#user-id-${id} #user-details-${id}`);
    element.classList.remove("hidden");
}


