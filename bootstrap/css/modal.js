/*jshint esversion: 6 */
$('#overlay_project').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var content = button.data('content');
    var html_content;
    switch (content) {
      case 'Tally Board':
      title = 'Tally Board';
      html_content = `
          <iframe class='modal-video center-block' src='http://www.youtube.com/embed/rVFfYdkR04o' allowfullscreen></iframe>
          <h3>Tally Board <small> &mdash; Math-puzzler for iOS</small></h3>
          <blockquote>
            <p>A challenger to one of the most addictive apps out there, Tally Board surpasses the usual sliding block game formula with a greater focus on mental arithmetic and planning ahead.</p>
            <footer>
              <cite>
                <a href='https://evaluapp.wordpress.com/2014/08/02/tally-board/'>EVALUAPP</a>
                </cite>
              </footer>
          </blockquote>
            <p>Tally Board was developed as a project to learn development for mobile devices. The app got very good reviews both online and in the App-Store, avareging about 4.3 out of 5.</p>

          <p>Because I needed to focus on school, and not marketing and maintenance, I eventually withdrew the app. I would love to revisit this project in due time, as I firmly believe that the idea was unique, and the app was both eucational and entertaining.</p>
          `;
          break;
      case 'MotoLift':
      title = 'MotoLift';
      html_content = `
        <iframe class='modal-video center-block' src='http://www.youtube.com/embed/kmVxxCcoFA8' allowfullscreen></iframe>
        <h3>MotoLift<small> &mdash; A mechanical ergonomic motorcycle-lifter</small></h3>
          <p>MotoLift was a graduation-project which goal was to lift a motorcycle using a roof-mounted scissorlifter.</p>
        <p>The project involved static calculations, project-management, CAD-work, budgeting, planning, marketing-presentations, documentation among other.</p>
        <h4>Project group:</h4>
        <ol>
          <li>Runar Kristoffersen &ndash; Project manager</li>
          <li>Max Even Jacobsen &ndash; Project member</li>
          <li>Knut Inge Lundevold &ndash; Project idea and member</li>
          <li>Terhe Larsen &ndash; Project member</li>
        </ol>
          `;
          break;
      case 'Tournament':
      title = 'Tournamen Results';
      html_content = `
      <svg class='center-block'version='1.1'  x='0' y='0' width='100.224' height='100.8' viewBox='0, 0, 100.224, 100.8'>
        <g id='Layer_1' transform='translate(-6.653, -6.2)'>
          <path d='M106.877,47.816 L106.877,6.2 L6.653,6.2 L6.653,47.816 L27.965,47.816 L30.845,29.528 L41.933,29.528 L41.933,82.232 L29.693,85.112 L29.693,107 L84.125,107 L84.125,85.112 L71.741,82.232 L71.741,29.528 L82.829,29.528 L85.709,47.816 z' fill='#022678'/>
        </g>
      </svg>
              <h3>Torunament results<small> &mdash; Swiss tournament</small></h3>
              <blockquote>
                <p>Python project to store matches in a tournament and pair players against an equal opponent.</p>
                <a href="
                            https://github.com/runartrollet/Tournament_fullstack-nanodegree-vm">Github: Tournament fullstack</a>
          `;
        break;
      default:

    }
    var description = button.data('description');
    var modal = $(this);
    modal.find('.modal-title').text(title);
    modal.find('.modal-body').html(html_content);
});
// Stop a video playing when modal hides(user closes)
$("#overlay_project").on('hidden.bs.modal', function (e) {
$("#overlay_project iframe").attr("src", $("#overlay_project iframe").attr("src"));
});
