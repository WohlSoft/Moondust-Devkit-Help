import assert from 'assert';
import { getFilenameByPath, getFileUrl } from '..';
describe('utils/index', function () {
  it('getFilenameByPath', function () {
    assert(getFilenameByPath('/') === '/README.md');
    assert(getFilenameByPath('/foo') === '/foo.md');
    assert(getFilenameByPath('foo') === '/foo.md');
    assert(getFilenameByPath('/foo/bar/') === '/foo/bar/README.md');
  });
  it('getFileUrl', function () {
    assert(getFileUrl(null, getFilenameByPath('/')) === 'README.md');
    assert(getFileUrl('/', getFilenameByPath('/')) === '/README.md');
    assert(getFileUrl('./', getFilenameByPath('/')) === 'README.md');
    assert(getFileUrl('./docs/', getFilenameByPath('/')) === 'docs/README.md');
    assert(getFileUrl('/docs/', getFilenameByPath('/')) === '/docs/README.md');
    assert(getFileUrl('/docs/', getFilenameByPath('/foo')) === '/docs/foo.md');
    assert(getFileUrl('/docs/', getFilenameByPath('/foo.md')) === '/docs/foo.md');
    assert(getFileUrl('/docs/', getFilenameByPath('/foo/')) === '/docs/foo/README.md');
  });
});