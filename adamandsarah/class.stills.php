<?php
class Still {
    public $id, $title, $img, $story;
    
    public function __construct($still_idNum,$still_title, $still_img, $still_story) {
        $this->id    = $still_idNum;
        $this->title = $still_title;
        $this->img   = $still_img;
        $this->story = $still_story;
    }

    public function outputMarkup() {
        echo '<figure id="still'.$this->id.'" class="still">
                <img src="images/'.$this->img.'.png" alt="'.$this->title.'" />
                <figcaption>
                    <h2 class="title">'.$this->title.'</h2>
                    <p>'.$this->story.'</p>
                </figcaption>
            </figure>';
    }
}