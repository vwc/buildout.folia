from five import grok

from Products.CMFCore.interfaces import IFolderish


class GalleryView(grok.View):
    grok.context(IFolderish)
    grok.require('zope2.View')
    grok.name('gallery-view')


class ThumbnailView(grok.View):
    grok.context(IFolderish)
    grok.require('zope2.View')
    grok.name('thumbnail-view')
