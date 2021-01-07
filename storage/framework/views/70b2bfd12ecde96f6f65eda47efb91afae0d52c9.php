<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

        <title>Auth</title>
        <!-- Styles -->
        <link href="<?php echo e(asset('css/app.css')); ?>" rel="stylesheet"> 
        
    </head>
    <body>
            <div id="root"></div>
            <script src="<?php echo e('js/app.js'); ?>"></script>
        </div>
    </body>
</html><?php /**PATH C:\laragon\www\laravelServerPassport\resources\views/welcome.blade.php ENDPATH**/ ?>