$(document).ready(function () {
    const wrapper = $('wrapper');
    rocketData.forEach(rocket => {
        const card =
            $(`<div class="card">
<div class="card-content">
    <div class="card-number">C1</div>
    <div class="card-title">
        <div class="card-name">Voyager1</div>
        <div class="card-group">Probes</div>
    </div>

    <div class="rocket-image">
        <img src="images/voyager.webp" alt="Voyager1">
    </div>
    <div class="goal-icon">Goal</div>
    <div class="rocket-info">Solar system exploration</div>

    <div class="stat-icon">mission duration</div>
    <div class="stat-value">19000</div>
    <div class="stat-icon">max speed</div>
    <div class="stat-value">62000</div>
    <div class="stat-icon">max earth distance</div>
    <div class="stat-value">22286000</div>
    <div class="stat-icon">development cost</div>
    <div class="stat-value">250</div>
    <div class="stat-icon">weight</div>
    <div class="stat-value">773</div>
    <div class="stat-icon">year build</div>
    <div class="stat-value">1977</div>

</div>
</div>`);
        wrapper.append(card);
    });
});